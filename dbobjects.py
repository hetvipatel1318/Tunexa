import sqlite3
import pandas as pd

def create_table():
    
    conn = sqlite3.connect('playerdb.sqlite')

    # Creating a cursor object using the
    # cursor() method
    cursor = conn.cursor()
    cursor.execute("DROP TABLE IF EXISTS USER_INFO")
    # Creating table
    table = """ CREATE TABLE USER_INFO (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id VARCHAR(255) NOT NULL,
                Email VARCHAR(255) NOT NULL,
                First_Name CHAR(25) NOT NULL,
                Last_Name CHAR(25),
                Password VARCHAR(255),
                user_type VARCHAR(255)
            ); """

    cursor.execute(table)

    print("Table is Ready")

    # Close the connection
    conn.close()
    
def insert_data(uname, email, fname, lname, password):
    # Connecting to sqlite
    conn = sqlite3.connect('playerdb.sqlite')

    # Creating a cursor object using the
    # cursor() method
    cursor = conn.cursor()

    # Queries to INSERT records.
    cursor.execute('''INSERT INTO USER_INFO (user_id, Email, First_Name, Last_Name, Password, user_type) VALUES (?,?,?,?,?,?)''', (uname, email, fname, lname, password, 'user'))

    # Commit your changes in the database	
    conn.commit()

    # Closing the connection
    conn.close()
    return True
    
def read_all_data():
    # Connecting to sqlite
    conn = sqlite3.connect('playerdb.sqlite')

    # Creating a cursor object using the
    # cursor() method
    cursor = conn.cursor()
    cursor.execute('''SELECT user_id, First_Name, Last_Name, user_type FROM USER_INFO''')
    # for row in data:
    #     print(row)
    data = cursor.fetchall()
    # Closing the connection
    conn.close()
    
    df = pd.DataFrame(data, columns = ['user_id', 'fname', 'lname', 'user_type'])
    user_ids = list(df.user_id)
    return user_ids, df
    
def user_exists(id, password):
    # Connecting to sqlite
    conn = sqlite3.connect('playerdb.sqlite')

    # Creating a cursor object using the
    # cursor() method
    cursor = conn.cursor()
    cursor.execute("SELECT id, First_Name, Last_Name, user_type FROM USER_INFO WHERE user_id = ? AND Password = ?", (id,password,))
    data=cursor.fetchall()
    if len(data)==0:
        # print('No user exists with the id {} !'.format(id))
        conn.close()
        return None
    else:
        # print('Welcome {} {}!'.format(data[0][1], data[0][2]))
        conn.close()
        return (data[0][1], data[0][2], data[0][3])
    