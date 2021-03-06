<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
    <title>项目首页</title>
</head>
<style>
    #app {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    h1 {
        font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
        font-size: 2em;
        font-weight: 300;
        text-align: center;
        color: #304455;
    }

    a {
        display: block;
        box-sizing: border-box;
        margin: 0 auto;
        padding: 10px 25px;
        width: max-content;
        font-size: 15px;
        line-height: 20px;
        color: #4f5959;
        font-weight: 600;
        text-align: center;
        letter-spacing: 0.1em;
        background-color: #f6f6f6;
        text-decoration: none;
        border-radius: 2em;
        transition: all 0.15s ease;
    }

    svg {
        display: inline-block;
        vertical-align: bottom;
        margin-right: 5px;
    }

    .color-demo {
        display: flex;
        justify-content: space-between;
    }
</style>
<body>
<div id="app">
    <h1>{{helloWorld}}</h1>
    <a href="https://github.com/frontend-templates/express" target="_blank" rel="noopener">
        <svg width="20" aria-labelledby="simpleicons-github-dark-icon" lang="" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-github-dark-icon" lang="en">GitHub Dark icon</title>
            <path fill="#7F8C8D"
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
        </svg>
        GITHUB</a>
    <br>
<!--    <div class="color-demo">-->
<!--        {{#color 'success'}}success{{/color}}-->
<!--        {{#color 'warning'}}warning{{/color}}-->
<!--        {{#color 'danger'}}danger{{/color}}-->
<!--        {{#color 'info'}}info{{/color}}-->
<!--    </div>-->
</div>
</body>
</html>
