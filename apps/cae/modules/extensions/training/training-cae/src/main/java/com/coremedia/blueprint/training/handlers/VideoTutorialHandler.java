package com.coremedia.blueprint.training.handlers;

import com.coremedia.blueprint.cae.handlers.PageHandlerBase;
import com.coremedia.blueprint.common.contentbeans.Page;
import com.coremedia.blueprint.common.navigation.Navigation;
import com.coremedia.blueprint.training.contentbeans.CMVideoTutorial;
import com.coremedia.cap.user.User;
import com.coremedia.objectserver.web.HandlerHelper;
import com.coremedia.objectserver.web.UserVariantHelper;
import com.coremedia.objectserver.web.links.Link;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

/*
* Includes link handler and request handler.
*
* The link handler creates links when the method createLink() is called.
*
* The request handler handles get requests and returns a modelAndView object. The modelAndView object is used by the
* view resolver in order to find the right template for the object to be rendered.
* */

@Link
@RequestMapping
public class VideoTutorialHandler extends PageHandlerBase {

  private static final String URL_PATTERN = "/videotutorial/{id:\\d+}/{title}.{extension}";

  // link handler
  @Link(uri=URL_PATTERN, type= CMVideoTutorial.class)
  public Map<String, Object> createLink(CMVideoTutorial target, String view) {

    // get id from target
    int id = target.getContentId();

    // get title from target
    String title = target.getTitle();
    if (title == null || title.isEmpty() || title.isBlank()) {
      title = "Tutorial";
    }

    // get extension from view parameter given in @cm.link that calls this method
    // if no view parameter is given, then create link with .html extension
    String extension = getExtension(view);

    // put values for id, title and extension into map
    Map<String, Object> values = new HashMap<>();
    values.put("id", id);
    values.put("title", title);
    values.put("extension", extension);

    // return map
    return values;

  }


  private static String getExtension(String view) {
    return view == null ? "html" : view;
  }

  // request handler
  @GetMapping(URL_PATTERN)
  public ModelAndView handleRequest(@PathVariable("id") CMVideoTutorial bean,
                                    @PathVariable("extension") String extension,
                                    HttpServletRequest request) {

    // if there is no bean found with the given ID in the URL
    if (bean == null) {
      return HandlerHelper.notFound();
    }

    // get view from extension in URL
    // QUESTION: but why can't the page be loaded (404 not found) if .html is omitted in    the URL? Shouldn't it be
    // view = null then too?
    String view = getViewFromExtension(extension);

    // create page from context and the target bean to be rendered
    // param developer is used to use theme in frontend developer's home folder in Studio
    Navigation context = getNavigation(bean);
    User developer = UserVariantHelper.getUser(request);
    Page page = asPage(context, bean, developer);

    // self = object that is to be rendered
    // if no view is given in URL, then self is the page containing the CMVideoTutorial, Navigation etc.
    // if a view is given in URL, then self is the CMVideoTutorial
    Object self = (view == null) ? page : bean;

    // create ModelAndView object that is used by view resolver
    // render self with view
    ModelAndView mav = HandlerHelper.createModelWithView(self, view);

    // add page to ModelAndView as additional model
    addPageModel(mav, page);
    return mav;
  }

  // if html is given as extension, then return null
  // otherwise return the extension
  // don't use extension.equals("html"), because extension can be null and null.equals gives a NullPointerException
  private String getViewFromExtension(String extension) {
    return ("html".equals(extension) ? null : extension);
  }

}
