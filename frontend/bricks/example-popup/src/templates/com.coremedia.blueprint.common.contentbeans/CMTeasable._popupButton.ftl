<#-- @ftlvariable name="self" type="com.coremedia.blueprint.common.contentbeans.CMTeasable" -->

<#import "*/node_modules/@coremedia/brick-utils/src/freemarkerLibs/components.ftl" as components />

<#--
  Template Description:

  This templates renders a call-to-action button to the detail page and is part of the layout "asPopup".

  @since 1907
-->

<div class="cm-popup__button cm-button-group">
  <@components.button text=cm.getMessage("popup_button_cta") href="${cm.getLink(self.target!cm.UNDEFINED)}" attr={
    "classes": ["cm-button-group__button cm-button--primary cm-button--popup cm-button--popup-loading"]
  } />
</div>
