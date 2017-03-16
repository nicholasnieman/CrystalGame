$(function() {


            var computerChoice = Math.floor(Math.random() * 100 + 1) + 50;
            var random1 = Math.floor(Math.random() * 15) + 1;
            var random2 = Math.floor(Math.random() * 15) + 1;
            var random3 = Math.floor(Math.random() * 15) + 1;
            var random4 = Math.floor(Math.random() * 15) + 1;


            $('img').click(function() {
                var score = 0;

            });

            if (imgId === 'crytal1') {
                score = score + random1;
            }
            if (imgId === 'crytal2') {
                score = score + random2;
            }
            if (imgId === 'crytal3') {
                score = score + random3;
            }
            if (imgId === 'crytal4') {
                score = score + random4;
            }


        };
