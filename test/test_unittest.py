import unittest   # The test framework
from flask import url_for
from app import create_app
from werkzeug.test import TestResponse
from werkzeug.routing import BuildError
tapp= create_app()

client = tapp.test_client()



class Test_TestUrlPath(unittest.TestCase):
    def test_login(self):
        self.assertIsInstance(client.get('/login'), TestResponse)
    
    def test_urlfor_error(self):
        with tapp.test_request_context():
            with self.assertRaises(BuildError) as cm:
                url_for("main.memberPage")
            print(cm.exception)
    def test_urlfor_eq(self):
        with tapp.test_request_context():
            print(url_for("main.memberPage"))
            self.assertEqual(url_for("main.memberPage"),"123")







if __name__ == '__main__':
    unittest.main()
