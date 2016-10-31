<?php
require_once('vendor/autoload.php');

$stripe = array(
  "secret_key"      => "sk_test_lolthoughtyoucouldgetmykey",
  "publishable_key" => "pk_test_miqlxHjy5qWGU2MaWevcm3ok"
);

\Stripe\Stripe::setApiKey($stripe['secret_key']);
?>