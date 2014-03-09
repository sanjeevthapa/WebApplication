

(function () {

    CKEDITOR.plugins.add('imageYP', {
        lang: "en,de",
        icons: "imageyp",
        allowedContent: "img {*}(*)",
        init: function (editor) {
            var pluginCmd = 'imageYP';
           
            // Add the link and unlink buttons.
            editor.addCommand(pluginCmd, 
                {
                    exec: function (editor) {
                        //here is where we tell CKEditor what to do.
                        var projectid = $(document).find("head meta[name='projectid']").attr("content");
                        var pageid = $(document).find("head meta[name='pageid']").attr("content");
                        var pictureDialog = new parent.PictureDialog();
                        pictureDialog.Show(
                            {
                                ProjectID: projectid,
                                okCallback: function ($img) {
                                    var htmltext = HtmlHelper.Unescape($img.wrap("<span></span>").parent().html());
                                    editor.insertHtml(htmltext);
                                }
                            }
                         );
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