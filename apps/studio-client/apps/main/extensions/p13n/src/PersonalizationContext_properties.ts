
/**
 * Contains localization properties used for user-context data. Context names, their properties, and the respective
 * values can be localized by using the patterns
 *
 *   <actualContextName>=<localizedContextName> for context names
 *   <actualContextName>_<actualPropertyName>=<localizedPropertyName> for property keys
 *   <actualContextName>_<actualPropertyName>_<actualPropertyValue>=<localizedPropertyValue> for property values
 *
 * All non-word characters, that is everything but (A-Z, a-z, 0-9, or _), are removed from the actual names before
 * a property look-up is performed.
 *
 * If a localization of a context, property, or value is missing, the actual value is used.
 *
 * @see PersonalizationContext_properties#INSTANCE
 */
interface PersonalizationContext_properties {

  p13n_context_system: string;
  p13n_context_system_timeOfDay: string;
  p13n_context_system_date: string;
  p13n_context_system_dayOfWeek: string;
  p13n_context_system_dayOfWeek_1: string;
  p13n_context_system_dayOfWeek_2: string;
  p13n_context_system_dayOfWeek_3: string;
  p13n_context_system_dayOfWeek_4: string;
  p13n_context_system_dayOfWeek_5: string;
  p13n_context_system_dayOfWeek_6: string;
  p13n_context_system_dayOfWeek_7: string;
  p13n_context_system_dateandtime: string;
  p13n_context_system_dateTime: string;
  p13n_context_keyword: string;
  p13n_context_personal: string;
  p13n_context_personal_dateofbirth: string;
  p13n_context_personal_street: string;
  p13n_context_personal_additionaladdressinformation: string;
  p13n_context_personal_emailaddress: string;
  p13n_context_personal_role: string;
  p13n_context_personal_website: string;
  p13n_context_personal_phonenumber: string;
  p13n_context_personal_postalcode: string;
  p13n_context_personal_dateandtime: string;
  p13n_context_personal_timezone: string;
  p13n_context_personal_title: string;
  p13n_context_personal_givenname: string;
  p13n_context_personal_nickname: string;
  p13n_context_personal_familyname: string;
  p13n_context_personal_fullname: string;
  p13n_context_personal_skypename: string;
  p13n_context_personal_cellphonenumber: string;
  p13n_context_personal_locality: string;
  p13n_context_personal_organization: string;
  p13n_context_personal_country: string;
  p13n_context_explicit_social: string;
  p13n_context_explicit_adaptive: string;
  p13n_context_explicit_mobile: string;
  p13n_context_explicit_multitouch: string;
  p13n_context_referrer: string;
  p13n_context_referrer_emptyText: string;
  p13n_context_referrer_query: string;
  p13n_context_referrer_searchengine: string;
  p13n_context_segment: string;
  p13n_context_example: string;
  p13n_context_example_boolean: string;
  p13n_context_testuser_profile_socialsoftware: string;
  p13n_context_testuser_profile_givenname: string;
  p13n_context_testuser_profile_givenname_emptyText: string;
  p13n_context_testuser_profile_name: string;
  p13n_context_testuser_profile_name_emptyText: string;
  p13n_context_testuser_profile_birthday: string;
  p13n_context_testuser_profile_email: string;
  p13n_context_testuser_profile_systemproperties: string;
  p13n_context_testuser_profile_date_and_time: string;
  p13n_context_testuser_profile_interests: string;
  p13n_context_testuser_profile_addinterests: string;
  p13n_context_testuser_profile_withvalue: string;
  p13n_context_testuser_profile_image: string;
/**
 *Misc
 */
  p13n_context_es_check: string;
  p13n_context_es_check_numberOfComments: string;
  p13n_context_es_check_userLoggedIn: string;
  p13n_context_es_check_numberOfRatings: string;
  p13n_context_es_check_numberOfLikes: string;
  p13n_context_explicit_numberOfExplicitInterests: string;
  p13n_context_last_visited_pagesVisited: string;
  p13n_context_last_visited: string;
  p13n_context_location_city: string;
  p13n_context_gender: string;
}

/**
 * Singleton for the current user Locale's instance of ResourceBundle "PersonalizationContext".
 * @see PersonalizationContext_properties
 */
const PersonalizationContext_properties: PersonalizationContext_properties = {
  p13n_context_system: "System Information",
  p13n_context_system_timeOfDay: "Time of Day",
  p13n_context_system_date: "Date",
  p13n_context_system_dayOfWeek: "Day of Week",
  p13n_context_system_dayOfWeek_1: "Sunday",
  p13n_context_system_dayOfWeek_2: "Monday",
  p13n_context_system_dayOfWeek_3: "Tuesday",
  p13n_context_system_dayOfWeek_4: "Wednesday",
  p13n_context_system_dayOfWeek_5: "Thursday",
  p13n_context_system_dayOfWeek_6: "Friday",
  p13n_context_system_dayOfWeek_7: "Saturday",
  p13n_context_system_dateandtime: "Date and Time",
  p13n_context_system_dateTime: "Date and Time",
  p13n_context_keyword: "Keywords",
  p13n_context_personal: "Personal Information",
  p13n_context_personal_dateofbirth: "Date of Birth",
  p13n_context_personal_street: "Address",
  p13n_context_personal_additionaladdressinformation: "Additional Address",
  p13n_context_personal_emailaddress: "Email",
  p13n_context_personal_role: "Role",
  p13n_context_personal_website: "Website",
  p13n_context_personal_phonenumber: "Phone",
  p13n_context_personal_postalcode: "Postal Code",
  p13n_context_personal_dateandtime: "Date and Time",
  p13n_context_personal_timezone: "Time Zone",
  p13n_context_personal_title: "Title",
  p13n_context_personal_givenname: "Given Name",
  p13n_context_personal_nickname: "Nickname",
  p13n_context_personal_familyname: "Family Name",
  p13n_context_personal_fullname: "Full Name",
  p13n_context_personal_skypename: "Skype",
  p13n_context_personal_cellphonenumber: "Mobile",
  p13n_context_personal_locality: "Locality",
  p13n_context_personal_organization: "Organization",
  p13n_context_personal_country: "Country",
  p13n_context_explicit_social: "Elastic Social",
  p13n_context_explicit_adaptive: "Adaptive Websites",
  p13n_context_explicit_mobile: "Mobile Delivery",
  p13n_context_explicit_multitouch: "Multi Touchpoint",
  p13n_context_referrer: "Referrer Information",
  p13n_context_referrer_emptyText: "The referrer URL of the first request of a session.",
  p13n_context_referrer_query: "Search Query",
  p13n_context_referrer_searchengine: "Search Engine",
  p13n_context_segment: "Segments",
  p13n_context_example: "Example Context",
  p13n_context_example_boolean: "Boolean Property",
  p13n_context_testuser_profile_socialsoftware: "Elastic Social",
  p13n_context_testuser_profile_givenname: "Given Name",
  p13n_context_testuser_profile_givenname_emptyText: "Enter the persona's given name.",
  p13n_context_testuser_profile_name: "Name",
  p13n_context_testuser_profile_name_emptyText: "Enter the persona's family name.",
  p13n_context_testuser_profile_birthday: "Birthday",
  p13n_context_testuser_profile_email: "Email",
  p13n_context_testuser_profile_systemproperties: "System Properties",
  p13n_context_testuser_profile_date_and_time: "Date and Time",
  p13n_context_testuser_profile_interests: "Interests (Keywords)",
  p13n_context_testuser_profile_addinterests: "+ Add interest property",
  p13n_context_testuser_profile_withvalue: "with value",
  p13n_context_testuser_profile_image: "Image",
  p13n_context_es_check: "Social Check",
  p13n_context_es_check_numberOfComments: "Number of Comments",
  p13n_context_es_check_userLoggedIn: "User Logged in",
  p13n_context_es_check_numberOfRatings: "Number of Ratings",
  p13n_context_es_check_numberOfLikes: "Number of Likes",
  p13n_context_explicit_numberOfExplicitInterests: "Number of Explicit Interests",
  p13n_context_last_visited_pagesVisited: "Number of Visited Pages",
  p13n_context_last_visited: "Last Visited",
  p13n_context_location_city: "City",
  p13n_context_gender: "Gender",
};

export default PersonalizationContext_properties;
