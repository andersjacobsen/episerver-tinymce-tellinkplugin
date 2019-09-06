! function () {
    "use strict";

tinymce.PluginManager.add('tellink', function (editor, url) {
    
    editor.addCommand('tinymcecustombutton', function () {
   
        var href = "";
        var text = "";
        
        //On open
        if (editor.selection.getNode().tagName === "A"
            && editor.selection.getNode().className.includes("tellink")) {
            href = editor.selection.getNode().getAttribute("href").replace("tel:","");
            text = editor.selection.getNode().innerText;
        }

        // Open window
        editor.windowManager.open({
            title: 'Tel Link',
            body: [
                { type: 'textbox', name: 'href', label: 'Phone Number', value: href },
                { type: 'textbox', name: 'text', label: 'Link text', value: text },
            ],
            onSubmit: function(api) {
                var data = api.data;

                if (data.href === '') {
                    return;
                }

                if (data.text === '') {
                    editor.insertContent('<a class="tellink" href="tel:' + data.href + '">' + data.href + '</a>');
                    return;
                }

                editor.insertContent('<a class="tellink" href="tel:' + data.href + '">' + data.text + '</a>');
                
            }
        });
    });

    
    // Add a button that opens a window
    editor.addButton('tellink', {
        title: 'Tel Link',
        image: url + '/images/tel.png',
        cmd: 'tinymcecustombutton'
    });
    

    return {
        getMetadata: function () {
            return {
                name: "Tellink plugin",
                url: "http://andersjacobsen.net"
            };
        }
    };
});
}();

