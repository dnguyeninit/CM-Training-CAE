package com.coremedia.catalog.studio.lib.validators;

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentType;
import com.coremedia.rest.cap.validation.AbstractContentTypeValidator;
import com.coremedia.rest.validation.Issues;
import com.coremedia.rest.validation.Severity;
import edu.umd.cs.findbugs.annotations.NonNull;

import java.util.Set;

public class CatalogCategoryValidator extends AbstractContentTypeValidator {
  private static final String CODE_ISSUE_NOT_IN_CATALOG = "categoryIsNotLinkedInCatalog";
  private static final String SETTINGS_TYPE = "CMSettings";
  public static final String CHILDREN_PROPERTY_NAME = "children";

  private final String liveContextSettingName;

  public CatalogCategoryValidator(@NonNull ContentType type,
                                  boolean isValidatingSubtypes,
                                  String liveContextSettingName) {
    super(type, isValidatingSubtypes);
    this.liveContextSettingName = liveContextSettingName;
  }


  @Override
  public void validate(Content content, Issues issues) {
    Set<Content> parentCategories = content.getReferrersWithDescriptor(getContentType(), CHILDREN_PROPERTY_NAME);
    if(parentCategories.isEmpty() && !isRootCategory(content)){
      issues.addIssue(getCategories(), Severity.WARN, null, CODE_ISSUE_NOT_IN_CATALOG);
    }
  }

  private boolean isRootCategory(Content content) {
    Set<Content> settings = content.getReferrersWithType(SETTINGS_TYPE);
    for (Content setting : settings) {
      if(setting.getName().equals(liveContextSettingName)) {
        return true;
      }
    }
    return false;
  }
}
