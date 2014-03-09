

(function () {

    CKEDITOR.plugins.add('linkYP', {
        lang: "en,de",
        //requires: ['dialog'],
        icons: "linkyp",
        allowedContent: "a {*}(*)",
        init: function (editor) {
            var pluginCmd = 'linkYP';
           
            // Add the link and unlink buttons.
            editor.addCommand(pluginCmd, 
                {
                    exec: function (editor) {
                        //here is where we tell CKEditor what to do.
                        //var projectid = $(document).find("head meta[name='projectid']").attr("content");
                        //var pageid = $(document).find("head meta[name='pageid']").attr("content");

                        var param = {
                            ProjectID: $(document).find("head meta[name='projectid']").attr("content"),
                            PageID: $(document).find("head meta[name='pageid']").attr("content"),
                            ViewID: $(document).find("head meta[name='viewid']").attr("content"),
                            CKEditorSelected: CKEDITOR.plugins.link.getSelectedLink(editor),
                            okCallback: function (link) {
                                //var htmltext = HtmlHelper.Unescape($link.wrap("<span></span>").parent().html());
                                editor.insertHtml(link);
                            }
                        }

                        var linkDialog = new parent.LinkDialog(param);
                        linkDialog.Show();
                        //editor.insertHtml('This text is inserted when clicking on our new button from the CKEditor toolbar');
                    }
                }
            );
        }
    });


    // Helper
    var HtmlHelper = {

        Unescape: function (str) {
            return String(str)
                .replace(/&amp;/g, '&')
                .replace(/&quot;/g, '"')
                .replace(/#39;/g, "'")
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>');
        },

        Escape: function (str) {
            return String(str)
                .replace(/&/g, '&amp;')
                .replace(/"/g, '&quot;')
            //            .replace(/'/g, '&#39;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
        }


    }


})();