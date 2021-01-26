<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <input type="text" id="ipt" value="">
    <p id="con"></p>
    <script>
        /* 
            模拟数据双向绑定
                1.只要input的值改变 就会触发 获取value的值并且赋值给p标签
                2.获取元素
                3.绑定input事件
                4.事件触发就立马获取表单的值，并赋值给p的内容

            知识点：
                给元素的内容赋值：使用textContent
        
        */

        var oIpt = document.getElementById('ipt');
        var oCon = document.getElementById('con');
        oIpt.oninput = function () {
            oCon.textContent = oIpt.value;
        }
    </script>
</body>

</html>
