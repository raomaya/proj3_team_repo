<html>
    <head>
        <h1>Welcome <?php echo $_POST["myName"]; ?> it is now time to being your journey!</h1>
        <h2></h2>
    </head>
    <body>
        <p>Your companion <?php echo $_POST["name"]; ?> will be joining you.</p>
        <img src="http://placekitten.com/200/300/">
        <p>Please press next to continue</p>
        <form action="index.html" method="post">
            <input type = "submit" value = "next">
        </form>
    </body>
</html>