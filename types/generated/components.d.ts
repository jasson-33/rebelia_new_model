import type { Schema, Attribute } from '@strapi/strapi';

export interface FieldValueItemFieldValue extends Schema.Component {
  collectionName: 'components_field_value_item_field_values';
  info: {
    displayName: 'field_value';
  };
  attributes: {
    short_text: Attribute.String;
    long_text: Attribute.Text;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'field-value-item.field-value': FieldValueItemFieldValue;
    }
  }
}
