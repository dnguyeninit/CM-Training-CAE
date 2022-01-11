<#-- @ftlvariable name="cmpage" type="com.coremedia.blueprint.common.contentbeans.Page" -->
<#assign root=cmpage.navigation.rootNavigation />

<div class="brand">${root.title!"No Title"}</div>
<div class="address-bar">${bp.truncateText(root.teaserText, 140)}</div>

<@cm.include self=cmpage.navigation view="asNavbar" />
