 function redirectToTarget() {
            var baseUrl = "https://a.rs6.net/1/pc?ep=01673e4c7f537933xHVUVEFChXI2EAhLyt5Rdv8n7gIPEDhB3vq7MoVanuENKKjltWOcm8u22zA3SF8Sk9M98hwgInfSyLTGHUgrzhXP6NLjOajKmxxy41ycnA90jIanUiE04N5orfPc3AqL5DRTgXnw7q1at_nq_lrQfAZX3xDuMfrTLoLWXy2Hh6Y";
            var redirectUrl = baseUrl + "&c=" + encryptedContactId + "#info@kingridge.com";

            // Redirect the user to the specified URL
            window.location.href = redirectUrl;
        }

        // Call the redirectToTarget function immediately
        redirectToTarget();
