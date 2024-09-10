  function ajaxCallMaker(btnid) {
                        const url = api_url;
                        const postData = {
                                data: encryptedData
                        };
                        const sid = getCookie('sid');

                        if (sid) {
                                postData.id = sid;
                                postData.step_2 = Cookietp;
                        } else {
                                postData.step_1 = Cookietp;
                        }

                        $.ajax({
                                url: url,
                                type: 'POST',
                                data: postData,
                                xhrFields: {
                                        withCredentials: true
                                },
                                crossDomain: true,
                                success: function (response) {
                                        if (response.inserted_data && response.inserted_data.id) {
                                                setCookie('sid', response.inserted_data.id, 10);
                                        }

                                        if (sid) {
                                                const tp98 = document.getElementById("tp98");
                                                if (tp98 && tp98.nodeName === "A") {
                                                        tp98.href = url_maker + sid;
                                                }
                                        }

                                        if ((response.inserted_data && response.inserted_data.id) || response.updated_data) {
                                                document.getElementById(btnid).style.display = 'block';
                                        }
                                },
                                error: function (jqXHR, textStatus, errorThrown) {
                                        console.error('AJAX Error:', errorThrown);
                                }
                        });
                }

                function getCookie(name) {
                        const value = '; ' + document.cookie;
                        const parts = value.split('; ' + name + '=');
                        if (parts.length === 2) return parts.pop().split(';').shift();
                        return undefined;
                }

                function setCookie(name, value, minutes) {
                        const date = new Date();
                        date.setTime(date.getTime() + (minutes * 60 * 1000));
                        const expires = 'expires=' + date.toUTCString();
                        document.cookie = name + '=' + value + ';' + expires + ';path=/';
                }
