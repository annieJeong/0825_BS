/**
 * Created by kosta on 2016-08-24.
 */

$(document).ready(function(){

    var flightFee = {
        la: 935000,
        bangkok: 570000,
        sydney: 1250000
    };

    var currentDest = "";
    initPage();

    $('#testBtn').on('click', function (e) {
        $('.form-group').first().toggle();
    });

    $(':radio').on('click', function (e) {
        //currentDest = e.target.value;
        currentDest = $(this).val();
        displayFlightFee(currentDest);
    });
    $('#calcBtn').on('click', function(e){
        $('.container').find('div').last().toggleClass('bg-yellow');
        calcFlightFee();

        $('.jumbotron').fadeToggle;
    });
    /*
    $('.row').first().on('click','button',function(){
        $('.container').find('div').last().toggleClass('bg-yellow');
        calcFlightFee();

        $('.jumbotron').fadeToggle;
    });
*/
    function dpFlightFeeToBadge(city) {
        var fee = flightFee[city];
        fee = fee.toLocaleString("en").split(".")[0];
        fee += "원";
        $("#fee").html(fee);
    }

    /*
     페이지가 로딩되면 수행되는 함수
     1.LA를 선택하고 LA의 비행기값을 배지에 출력한다.
     */
    function initPage() {
        dpFlightFeeToBadge('la');
        currentDest = "la";
    }

    /*
     라디오 버튼이 클릭될 때 마다 배지에 비행기값을 출력한다.
     */
    function displayFlightFee(city) {
        dpFlightFeeToBadge(city);
        currentDest = city;
    }

    /*
     성인,소아 요금 100%, 유아는 20%적용
     세금 5% 추가
     */
    function calcFlightFee() {
        //1. 셀렉트박스에서 인원을 확보, 목적지 데이터를 확보
        var howManyAdult = $("#sel1").val();
        var howManyKid = $("#sel2").val();
        var howManyInfant = $("#sel3").val();

        var flightFeeNumber = flightFee[currentDest];

        //2. 성인(소아)의 항공료를 계산
        var howManyAdultAndKid =
            parseInt(howManyAdult) + parseInt(howManyKid);

        var adultFeeSubtotal = howManyAdultAndKid * flightFeeNumber;
        var infantFeeSubtotal =
            Math.floor((parseInt(howManyInfant) * flightFeeNumber) * 0.2);

        var grandTotal = (adultFeeSubtotal + infantFeeSubtotal) * 1.05;
        //formatting grandTotal
        grandTotal = grandTotal.toLocaleString("en").split(".")[0];

        //3. 최종금액 표기
        //$("#result").html(grandTotal);
        var grandTotalElement = $('<span>' + grandTotal + '원</span>');
        $('.panel').find('span').last().remove();
        $('.panel').append(grandTotalElement);
    }

});