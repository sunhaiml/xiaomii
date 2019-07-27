module.exports={

     devServer:{
            proxy:{

                "/cs":{
                         "target":"https://m.huanle800.com",
                         "changeOrigin":true,
                         "pathRewrite":{

                               "^/cs":""

                         }
                },
                "/sz":{
                    "target":"http://localhost:3000",
                    "changeOrigin":true,
                    "pathRewrite":{
                        "^/sz":""
                    }
                }

            }


     }



}