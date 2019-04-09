Finance

	This application is a form that surveys users for their name, house, and role in a Qudditch team and stores the user's answers in a .csv file.

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

