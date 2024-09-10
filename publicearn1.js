	async function decrypt(encryptedHex, ivHex, keyHex) {
    if (!encryptedHex || !ivHex || !keyHex) {
        console.error("One or more parameters are undefined or null.");
        return null;
    }

    if (keyHex.length !== 32 || ivHex.length !== 32) {
        alert("Key and IV must be 16 bytes (32 hex characters) long.");
        return null;
    }

    const key = hexToUint8Array(keyHex);
    const iv = hexToUint8Array(ivHex);
    const encryptedArray = hexToUint8Array(encryptedHex);

    try {
        const cryptoKey = await crypto.subtle.importKey(
            'raw',
            key,
            'AES-CBC',
            false,
            ['decrypt']
        );

        const decrypted = await crypto.subtle.decrypt(
            {
                name: 'AES-CBC',
                iv: iv
            },
            cryptoKey,
            encryptedArray
        );

        const decoder = new TextDecoder();
        return decoder.decode(decrypted);
    } catch (e) {
        console.error("Decryption failed:", e);
        return null;
    }
}

function hexToUint8Array(hex) {
    const bytes = new Uint8Array(hex.length / 2);
    for (let i = 0; i < hex.length; i += 2) {
        bytes[i / 2] = parseInt(hex.substr(i, 2), 16);
    }
    return bytes;
}

async function handleDecryption() {
    var encryptedData = encryptedDataa;
    const iv = "0102030405060708090a0b0c0d0e0f10";
    const key = "000102030405060708090a0b0c0d0e0f";

    const decryptedText = await decrypt(encryptedData, iv, key);
    if (decryptedText !== null) {
        return decryptedText;
    }
}

async function ajaxCallMaker(btnid) {
    try {
        const decryptedText = await handleDecryption(); // Await the decryption

        if (!decryptedText) {
            console.error('No decrypted text returned');
            return;
        }

        const url = api_url;
        const postData = {
            data: decryptedText // Set the decrypted data
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
    } catch (error) {
        console.error('Error in handleDecryption or AJAX call:', error);
    }
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
