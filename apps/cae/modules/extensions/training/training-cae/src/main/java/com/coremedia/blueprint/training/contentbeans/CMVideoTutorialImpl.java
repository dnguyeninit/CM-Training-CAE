package com.coremedia.blueprint.training.contentbeans;

import com.coremedia.blueprint.cae.contentbeans.CMArticleImpl;
import com.coremedia.blueprint.common.contentbeans.CMVideo;
import com.coremedia.blueprint.ecommerce.contentbeans.CMProduct;
import com.coremedia.cap.content.Content;
import com.coremedia.xml.Markup;

import java.util.List;

public class CMVideoTutorialImpl extends CMArticleImpl implements CMVideoTutorial {
  @Override
  public CMVideo getVideo() {
    Content video = getContent().getLink("video");
    return createBeanFor(video, CMVideo.class);
  }

  @Override
  public List<CMVideo> getVideos() {
    List<Content> videos = getContent().getLinks("video");
    return createBeansFor(videos, CMVideo.class);
  }

  @Override
  public Markup getProductionInfo() {
    return getMarkup("productionInfo");
  }

  @Override
  public int getDuration() {
    return getContent().getInt("duration");
  }

  @Override
  public String getCopyright() {
    return getContent().getString("copyright");
  }

  @Override
  public CMProduct getFeaturedProduct() {
    Content product = getContent().getLink("featuredProduct");
    return createBeanFor(product, CMProduct.class);
  }

  @Override
  public List<CMProduct> getFeaturedProducts() {
    List<Content> products = getContent().getLinks("featuredProduct");
    return createBeansFor(products, CMProduct.class);
  }
}
