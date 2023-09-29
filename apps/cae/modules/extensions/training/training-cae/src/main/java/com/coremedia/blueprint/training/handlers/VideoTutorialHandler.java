package com.coremedia.blueprint.training.handlers;

import com.coremedia.blueprint.training.contentbeans.CMVideoTutorial;
import com.coremedia.objectserver.web.HandlerHelper;
import com.coremedia.objectserver.web.links.Link;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

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
public class VideoTutorialHandler {

  private static final String URL_PATTERN = "/videotutorial/{id:\\d+}/{title}.{extension}";

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

  @GetMapping(URL_PATTERN)
  public ModelAndView handleRequest(@PathVariable("id") CMVideoTutorial self,
                                    @PathVariable("extension") String extension) {
    if (self == null) {
      return HandlerHelper.notFound();
    }

    String view = getViewFromExtension(extension);

    ModelAndView mav = HandlerHelper.createModelWithView(self, view);
    return mav;
  }

  private String getViewFromExtension(String extension) {
//    return ("html".equals(extension) ? null : extension);
    return (extension.equals("html") ? null : extension);
  }

}
