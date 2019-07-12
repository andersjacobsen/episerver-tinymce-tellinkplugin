

tinymce.PluginManager.add('tellink', function (editor, url) {
    
    editor.addCommand('tinymcecustombutton', function () {
        var isUpdate = false;
        //default values 
        var href = "";
        var text = "";
        
        //On open
        if (editor.selection.getNode().tagName === "A"
            && editor.selection.getNode().className.includes("tellink")) {
            href = editor.selection.getNode().getAttribute("href").replace("tel:","");
            text = editor.selection.getNode().innerText;
            isUpdate = true;
        }

        // Open window
        editor.windowManager.open({
            title: 'Tel Link',
            body: [
                { type: 'textbox', name: 'href', label: 'Phone Number', value: href },
                { type: 'textbox', name: 'text', label: 'Link text', value: text},
            ],
            onSubmit: function(api) {
                var data = api.data;
                if (isUpdate) {
                    editor.insertContent('<a class="tellink" href="tel:' + data.href + '">' + data.text + '</a>');

                } else {
                    editor.insertContent('<a class="tellink" href="tel:' + data.href + '">' + data.text + '</a>');
                }

            }
        });
    });
    
    // Add a button that opens a window
    editor.addButton('tellink', {
        title: 'Tel Link',
        image: url + '/images/tel.png',
        cmd: 'tinymcecustombutton',
        onAction: function () {
            // Open window
            window.alert('Before open');
            openDialog();
        }
    });
    

    return {
        getMetadata: function () {
            return {
                name: "Example plugin",
                url: "http://exampleplugindocsurl.com"
            };
        }
    };
});