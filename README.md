Dynamic-Form
============

Dynamically modify forms with javascript. Use-case: User creates data from a schema.

## Using Dynamic-Form

In your head section:

    // Link to jQuery
    <script type="text/javascript" src="jquery-1.7.2.min.js"></script>

    // Link to Dynamic-Form
    <script type="text/javascript" src="../src/dynamic-form.js"></script>

    // Use the plugin
    <script type="text/javascript">
      $("#my-form").dynamicForm({ schema : "http://sordina.net/data-schemas/animal.schema.json" })
    </script>
