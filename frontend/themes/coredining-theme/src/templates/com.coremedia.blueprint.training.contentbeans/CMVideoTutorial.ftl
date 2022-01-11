<#-- @ftlvariable name="self" type="com.coremedia.blueprint.common.contentbeans.CMArticle" -->
<#-- @ftlvariable name="cmpage" type="com.coremedia.blueprint.common.contentbeans.Page" -->
<div class="row"<@preview.metadata self.content />>
<div class="box col-lg-12">
  <hr>
  <h2 class="intro-text text-center"<@preview.metadata "properties.title" />><strong>${self.title!"No Title"}</strong></h2>
  <hr>

  <p class="text-center">
    <@cm.include self=cmpage.navigation view="asBreadcrumb" />
  </p>

  <#if self.video?has_content>
    <div<@preview.metadata "properties.video"/>>
      <@cm.include self=self.video view="asLarge" />
    </div>
  <#else>
    <div<@preview.metadata "properties.pictures" />>
      <@cm.include self=self view="_pictures" />
    </div>
  </#if>

  <hr>

  <div<@preview.metadata "properties.detailText" />>
    <@cm.include self=self.detailText!cm.UNDEFINED />
  </div>

  <div>
    <p><a href="${cm.getLink(self, 'pdf')}" class="xx-icon xx-icon--pdf">Download as PDF</a></p>
  </div>

  <div<@preview.metadata "properties.related" />>
    <@cm.include self=self view="_related" />
  </div>
</div>
</div>
