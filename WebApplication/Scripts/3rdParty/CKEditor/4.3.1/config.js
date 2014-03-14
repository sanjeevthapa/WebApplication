/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function (config) {
    // Define changes to default configuration here. For example:
    config.language = 'de';
    // config.uiColor = '#AADC6E';

    config.extraPlugins = 'imageYP,linkYP,image,link';

    // http://docs.ckeditor.com/#!/guide/dev_advanced_content_filter
    config.allowedContent = true;

    // Define the toolbar buttons you want to have availableac
    config.toolbar = 'cmsToolbar';

    // Toolbar configuration generated automatically by the editor based on config.toolbarGroups.
    // http://ckeditor.com/latest/samples/plugins/toolbar/toolbar.html
    // http://docs.ckeditor.com/#!/api/CKEDITOR.config-cfg-toolbar
    config.toolbar_cmsToolbar = [
        // { name: 'document', items: ['Source', '-', 'Save', 'NewPage', 'Preview', 'Print', '-', 'Templates'] },
        { name: 'editing', items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo', 'Find', 'Replace', '-', 'SelectAll', '-', 'Scayt'] },
        { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat'] },
        //{ name: 'editing', groups: ['find', 'selection', 'spellchecker'], items: ['Find', 'Replace', '-', 'SelectAll', '-', 'Scayt'] },
        //{ name: 'forms', items: ['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField'] },
        '/',
        { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'Table', 'HorizontalRule', 'SpecialChar', 'PageBreak'] },
        { name: 'links', items: ['Link', 'Unlink', 'Iframe', 'Anchor', 'Image'] },
        '/',
        { name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] },
        { name: 'colors', items: ['TextColor', 'BGColor'] },
        { name: 'tools', items: ['Maximize', 'ShowBlocks'] },
        { name: 'others', items: ['-'] },
        { name: 'about', items: ['About'] }
    ];


    config.toolbar_emptyToolbar =
    [
            { name: 'empty', items: [] }
    ];

    // Toolbar groups configuration.
    //config.toolbarGroups = [
    //    { name: 'document' },         // , groups: ['mode', 'document', 'doctools']
    //    { name: 'clipboard' },        // , groups: ['clipboard', 'undo']
    //    { name: 'editing' },          // , groups: ['find', 'selection', 'spellchecker']
    //    //{ name: 'forms' },
    //    '/',
    //    { name: 'basicstyles' },     // , groups: ['basicstyles', 'cleanup']
    //    { name: 'paragraph' },       // , groups: ['list', 'indent', 'blocks', 'align', 'bidi']
    //    { name: 'links' },
    //    { name: 'insert' },
    //    '/',
    //    { name: 'styles' },
    //    { name: 'colors' },
    //    { name: 'tools' },
    //    { name: 'others' },
    //    { name: 'about' }
    //];
};

