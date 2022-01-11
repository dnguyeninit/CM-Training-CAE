<#-- @ftlvariable name="self" type="com.coremedia.blueprint.common.contentbeans.CMVideo" -->
<div class="row">
  <div class="col-lg-12">
    <@cm.include self=self view="media"
                 params={
                   "classBox" : "xx-video xx-video--large",
                   "classMedia" : "xx-video__media"
                 } />
  </div>
</div>
