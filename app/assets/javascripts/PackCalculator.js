"use strict";
window.onload = attachEventHandlers;


function attachEventHandlers()
{
	document.getElementById('submit').onclick = calculateValue;
}

function calculateValue()
{
	var commonRate = .7142;
	var rareRate = .2280;
	var epicRate = .458;
	var legendaryRate = .120;

	var classicCommonTotal = 188;
	var classicRareTotal = 162;
	var classicEpicTotal = 74;
	var classicLegendaryTotal = 33;

	var gvgCommonTotal = 80;
	var gvgRareTotal = 74;
	var gvgEpicTotal = 52;
	var gvgLegendaryTotal = 20;

	var classicCommonOwned = document.getElementById('classic_common').value;
	var classicRareOwned = document.getElementById('classic_rare').value;
	var classicEpicOwned = document.getElementById('classic_epic').value;
	var classicLegendaryOwned = document.getElementById('classic_legendary').value;

	var gvgCommonOwned = document.getElementById('gvg_common').value;
	var gvgRareOwned = document.getElementById('gvg_rare').value;
	var gvgEpicOwned = document.getElementById('gvg_epic').value;
	var gvgLegendaryOwned = document.getElementById('gvg_legendary').value;

	var commonDisenchantValue = 5;
	var rareDisenchantValue = 20;
	var epicDisenchantValue = 100;
	var legendaryDisenchantValue = 400;

	var commonDustValue = 40;
	var rareDustValue = 100;
	var epicDustValue = 400;
	var legendaryDustValue = 1600;

	var classicCommonEV = commonRate * (((classicCommonOwned/classicCommonTotal) * commonDisenchantValue) + (((classicCommonTotal - classicCommonOwned)/classicCommonTotal) * commonDustValue));
	var classicRareEV = rareRate * (((classicRareOwned/classicRareTotal) * rareDisenchantValue) + (((classicRareTotal - classicRareOwned)/classicRareTotal) * rareDustValue));
	var classicEpicEV = epicRate * (((classicEpicOwned/classicEpicTotal) * epicDisenchantValue) + (((classicEpicTotal - classicEpicOwned)/classicEpicTotal) * epicDustValue));
	var classicLegendaryEV = legendaryRate * (((classicLegendaryOwned/classicLegendaryTotal) * legendaryDisenchantValue) + (((classicLegendaryTotal - classicLegendaryOwned)/classicLegendaryTotal) * legendaryDustValue));
	var classicPackEV = classicCommonEV + classicRareEV + classicEpicEV + classicLegendaryEV;

	var gvgCommonEV = commonRate * (((gvgCommonOwned/gvgCommonTotal) * commonDisenchantValue) + (((gvgCommonTotal - gvgCommonOwned)/gvgCommonTotal) * commonDustValue));
	var gvgRareEV = rareRate * (((gvgRareOwned/gvgRareTotal) * rareDisenchantValue) + (((gvgRareTotal - gvgRareOwned)/gvgRareTotal) * rareDustValue));
	var gvgEpicEV = epicRate * (((gvgEpicOwned/gvgEpicTotal) * epicDisenchantValue) + (((gvgEpicTotal - gvgEpicOwned)/gvgEpicTotal) * epicDustValue));
	var gvgLegendaryEV = legendaryRate * (((gvgLegendaryOwned/gvgLegendaryTotal) * legendaryDisenchantValue) + (((gvgLegendaryTotal - gvgLegendaryOwned)/gvgLegendaryTotal) * legendaryDustValue));
	var gvgPackEV = gvgCommonEV + gvgRareEV + gvgEpicEV + gvgLegendaryEV;

	var pack = document.getElementById('answer');
	var packPicture = document.getElementById('picture');
	if(classicPackEV > gvgPackEV)
	{
		pack.innerHTML="Buy a Classic Pack";
		
	}
	else if(classicPackEV < gvgPackEV)
	{
		pack.innerHTML="Buy a GvG Pack";
		
		
	}
	else if(classicPackEV == gvgPackEV)
	{
		pack.innerHTML="Both packs are equal";
		
	}
}
