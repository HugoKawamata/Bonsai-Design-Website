<?php
  require_once('./config.php');

  $token  = $_POST['stripeToken'];

  $customer = \Stripe\Customer::create(array(
      'email' => strip_tags(trim($_POST['email']))
      'source'  => $token
  ));
