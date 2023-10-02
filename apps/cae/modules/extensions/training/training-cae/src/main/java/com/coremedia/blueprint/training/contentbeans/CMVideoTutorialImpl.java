package com.coremedia.blueprint.training.contentbeans;

import com.coremedia.blueprint.cae.contentbeans.CMArticleImpl;
import com.coremedia.blueprint.common.contentbeans.CMVideo;
import com.coremedia.blueprint.common.navigation.Linkable;
import com.coremedia.blueprint.ecommerce.contentbeans.CMProduct;
import com.coremedia.cap.content.Content;
import com.coremedia.xml.Markup;

import java.util.List;

public class CMVideoTutorialImpl extends CMArticleImpl implements CMVideoTutorial {

  // helper method
  // return bean if it's not null and if it's valid
  private <T extends Linkable> T filter(T bean) {
    return (bean != null && getValidationService().validate(bean)) ? bean : null;
  }

  // helper method
  // return a list of valid beans
  private <T extends Linkable> List<T> filter(List<T> list) {
    return (List<T>) getValidationService().filterList(list);
  }

  @Override
  public CMVideo getVideo() {
    CMVideo video = getVideoUnfiltered();
    return filter(video);
  }

  // get a single video without validation
  public CMVideo getVideoUnfiltered() {
    Content video = getContent().getLink("video");
    return createBeanFor(video, CMVideo.class);
  }

  @Override
  public List<CMVideo> getVideos() {
    List<CMVideo> videos = getVideosUnfiltered();
    return filter(videos);
  }

  // get a list of videos without validation
  public List<CMVideo> getVideosUnfiltered() {
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
    CMProduct product = getFeaturedProductUnfiltered();
    return filter(product);
  }

  public CMProduct getFeaturedProductUnfiltered() {
    Content product = getContent().getLink("featuredProduct");
    return createBeanFor(product, CMProduct.class);
  }

  @Override
  public List<CMProduct> getFeaturedProducts() {
    List<CMProduct> products = getFeaturedProductsUnfiltered();
    return filter(products);
  }

  public List<CMProduct> getFeaturedProductsUnfiltered() {
    List<Content> products = getContent().getLinks("featuredProduct");
    return createBeansFor(products, CMProduct.class);
  }


}
