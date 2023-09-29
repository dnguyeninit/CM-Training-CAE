package com.coremedia.blueprint.training.views;

import com.coremedia.blueprint.common.contentbeans.CMTeasable;
import com.coremedia.cap.common.Blob;
import com.coremedia.objectserver.view.ServletView;
import com.coremedia.xml.Markup;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class PdfServletView implements ServletView<CMTeasable> {
  @Override
  public void render(CMTeasable self, String view,
                     HttpServletRequest request, HttpServletResponse response) {

    PdfBuilder pdfBuilder = new PdfBuilder();
    String title = self.getTitle();
    Markup text = self.getDetailText();
    Blob picture = self.getPicture().getData();

    pdfBuilder.setTitle(title);
    pdfBuilder.setText(text);
    pdfBuilder.setPicture(picture);

    try {
      pdfBuilder.writeOn(response);
      response.setStatus(HttpServletResponse.SC_OK);
    } catch (Exception ex) {
      response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
    }

  }
}
