import Config from "@jangaroo/runtime/Config";
import ConfigUtils from "@jangaroo/runtime/ConfigUtils";
import DocumentForm from "@coremedia/studio-client.main.editor-components/sdk/premular/DocumentForm";
import RelatedDocumentForm from "@coremedia-blueprint/studio-client.main.blueprint-forms/forms/containers/RelatedDocumentForm";
import ViewTypeSelectorForm from "@coremedia-blueprint/studio-client.main.blueprint-forms/forms/containers/ViewTypeSelectorForm";
import ValidityDocumentForm from "@coremedia-blueprint/studio-client.main.blueprint-forms/forms/containers/ValidityDocumentForm";
import TutorialPropertyFieldGroup from "./TutorialPropertyFieldGroup";
import TeaserPropertyFieldGroup from "./TeaserPropertyFieldGroup";
import InformationPropertyFieldGroup from "./InformationPropertyFieldGroup";
import BlueprintTabs_properties from "@coremedia-blueprint/studio-client.main.blueprint-forms/BlueprintTabs_properties";

interface CMVideoTutorialDocumentFormConfig extends Config<DocumentForm> {
}

class CMVideoTutorialDocumentForm extends DocumentForm {
  declare Config: CMVideoTutorialDocumentFormConfig;

  static override readonly xtype:string = "com.coremedia.blueprint.training.studio.config.cmVideoTutorialDocumentForm";

  constructor(config:Config<CMVideoTutorialDocumentForm> = null) {
    super(ConfigUtils.apply(Config(CMVideoTutorialDocumentForm,{
      itemId: "content",
      title: BlueprintTabs_properties.Tab_content_title,
      items: [
        Config(TutorialPropertyFieldGroup),
        Config(TeaserPropertyFieldGroup),
        Config(InformationPropertyFieldGroup),
        Config(RelatedDocumentForm),
        Config(ViewTypeSelectorForm),
        Config(ValidityDocumentForm),
      ],
    }), config));
  }
}

export default CMVideoTutorialDocumentForm;
