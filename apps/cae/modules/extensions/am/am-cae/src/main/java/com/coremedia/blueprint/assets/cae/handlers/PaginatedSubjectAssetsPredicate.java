package com.coremedia.blueprint.assets.cae.handlers;

import com.coremedia.blueprint.assets.cae.TaxonomyOverview;
import com.coremedia.blueprint.cae.view.HashBasedFragmentHandler;
import com.coremedia.objectserver.view.RenderNode;
import com.coremedia.objectserver.view.dynamic.DynamicIncludePredicate;
import com.coremedia.objectserver.view.dynamic.DynamicIncludeProvider;
import edu.umd.cs.findbugs.annotations.DefaultAnnotation;
import edu.umd.cs.findbugs.annotations.NonNull;

import java.util.List;

@DefaultAnnotation(NonNull.class)
public class PaginatedSubjectAssetsPredicate implements DynamicIncludePredicate, DynamicIncludeProvider {

  private static final List<String> VALID_PARAMS = List.of(
          DownloadPortalHandler.SUBJECT_REQUEST_PARAMETER_NAME,
          DownloadPortalHandler.PAGE_REQUEST_PARAMETER_NAME
  );

  @Override
  public boolean test(RenderNode input) {
    return null != input
            && input.getBean() instanceof TaxonomyOverview
            && DownloadPortalHandler.ASSETS_VIEW.equals(input.getView());
  }

  @Override
  public HashBasedFragmentHandler getDynamicInclude(Object delegate, String view) {
    return new HashBasedFragmentHandler(delegate, DownloadPortalHandler.ASSETS_VIEW, VALID_PARAMS);
  }
}
