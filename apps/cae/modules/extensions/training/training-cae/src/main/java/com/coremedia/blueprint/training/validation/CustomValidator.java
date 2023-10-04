package com.coremedia.blueprint.training.validation;

import com.coremedia.blueprint.common.services.validation.AbstractValidator;

import java.util.function.Predicate;

// a custom validator that checks if item.validate() returns true, whatever the item.validate() method of the
// relevant bean looks like
public class CustomValidator extends AbstractValidator<SupportsCustomValidation> {

  @Override
  public boolean supports(Class<?> clazz) {
    return SupportsCustomValidation.class.isAssignableFrom(clazz);
  }

  @Override
  protected Predicate<SupportsCustomValidation> createPredicate() {
    return (item) -> item!= null && item.validate();
  }

}
