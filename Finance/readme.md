Finance

	This tool checks the actual prices of real stocks using data from IEX, as well as buy and sell stocks with paper money to create a mock portfolio.


		Creates a model database using SQLite and phpMyAdmin to store usernames, hashed passwords, "cash" balances, stock purchases/sales info (e.g. transaction type, stock symbol, stock name, # of shares, price).

		Implements the controller (application.py).

		Implements the views (rendered with application.py via the templates folder).

Version 
	Python 3

Dependencies:
	flask
	flask_session
	cs50

Running 

	To run on Linux and Mac:
		export FLASK_APP=application.py
		export FLASK_ENV=development
		flask run

	To run on Windows cmd, use set instead of export:
		set FLASK_APP=application.py
		set FLASK_ENV=development
		flask run

	To run on Windows PowerShell, use $env: instead of export:
		$env:FLASK_APP = "application.py"
		$env:FLASK_ENV = "development"
		flask run

	For more information on running Flask, visit: http://flask.pocoo.org/docs/1.0/tutorial/factory/

