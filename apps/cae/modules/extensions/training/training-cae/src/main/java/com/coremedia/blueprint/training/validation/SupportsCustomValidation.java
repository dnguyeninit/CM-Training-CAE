package com.coremedia.blueprint.training.validation;

// used for CustomValidator, so it can be used for multiple beans
// any bean that implements this interface needs to implement a validate() method
public interface SupportsCustomValidation {

  boolean validate();

}
