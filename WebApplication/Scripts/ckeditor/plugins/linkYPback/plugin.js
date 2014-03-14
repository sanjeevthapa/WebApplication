(function () {
    alert('buhahaa');
    CKEDITOR.plugins.add('linkYP', {
        lang: "en,de",
        icons: "linkyp",
        allowedContent: "img {*}(*)",
        init: function (editor) {
            alert('initialized');
            var mypath = this.path;
            var pluginCmd = 'linkYP';
            editor.ui.addButton(
               'linkYP.btn',
               {
                   label: "LinkYP",
                   command: pluginCmd,
                   icon: mypath + 'icons/link_16.png'
               }
            );

            // Add the link and unlink buttons.
            editor.addCommand(pluginCmd,
                {
                    exec: function (editor) {
                        alert('LinkYP');
                        return false;
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