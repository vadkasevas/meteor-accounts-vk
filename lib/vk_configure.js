Template.configureLoginServiceDialogForVk.siteUrl = function () {
    return Meteor.absoluteUrl({
        replaceLocalhost: true
    });
};

Template.configureLoginServiceDialogForVk.fields = function () {
    return [
        {property: 'apiVersion',  label: 'Версия API VK'},
        {property: 'appId',  label: 'App Id'},
        {property: 'secret', label: 'App Secret'},
        {property: 'scope', label: 'Scope'}
    ];
};
