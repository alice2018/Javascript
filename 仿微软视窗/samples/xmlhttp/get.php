<?
	header('Content-Type: text/xml');
	
	$field = $HTTP_GET_VARS["field"];
	$value = $HTTP_GET_VARS["value"];
	
	if ($field == "zip")
	{
		if ($value < 10)
		{
			$city = 'Leipzig'; 
			$state = 'SX';
		}
		else
		{
			$city = 'Bonn'; 
			$state = 'RP';	
		}
	}
	
	echo '<?xml version="1.0"?><zip><city>'.$city.'</city><state>'.$state.'</state></zip>';
?>