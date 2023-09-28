package com.coremedia.blueprint.training.contentbeans;

import com.coremedia.blueprint.common.contentbeans.CMArticle;
import com.coremedia.blueprint.common.contentbeans.CMVideo;
import com.coremedia.blueprint.ecommerce.contentbeans.CMProduct;
import com.coremedia.xml.Markup;

import java.util.List;

public interface CMVideoTutorial extends CMArticle {

  CMVideo getVideo();

  List<CMVideo> getVideos();

  Markup getProductionInfo();

  int getDuration();

  String getCopyright();

  CMProduct getFeaturedProduct();

  List<CMProduct> getFeaturedProducts();

}
