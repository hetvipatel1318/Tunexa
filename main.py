from dbobjects import create_table, insert_data, read_all_data, user_exists
import streamlit as st
import base64
from capture import *
import re
from PIL import Image

regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'


# Define a function for
# for validating an Email


def check(email):
    # pass the regular expression
    # and the string into the fullmatch() method
    if (re.fullmatch(regex, email)):
        print("Valid Email")

    else:
        print("Invalid Email")
# ----------------------------------------
# create_table()
# insert_data()
# read_all_data()
# print(user_exists('Raju123', 'abc123'))

def get_base64(bin_file):
    with open(bin_file, 'rb') as f:
        data = f.read()
    return base64.b64encode(data).decode()

def set_background(png_file):
    bin_str = get_base64(png_file)
    page_bg_img = '''
    <style>
    .stApp {
    background-image: url("data:image/png;base64,%s");
    background-size: cover;
    }
    </style>
    ''' % bin_str
    st.markdown(page_bg_img, unsafe_allow_html=True)
    

def main():
    
    st.markdown("<h1 style='text-align: center;'>Welcome to Tunexa</h1>", unsafe_allow_html=True)
    #title_img = Image.open('image.png')

    #st.image(title_img, width=720)
    menu = ["Home","Login","SignUp"]
    choice = st.sidebar.selectbox("Menu",menu)

    if choice == "Home":
        st.markdown("<h1 style='text-align: center;'>Let Music Speak</h1>", unsafe_allow_html=True)
        #set_background('bgimg1.jpg')

    elif choice == "Login":
        #set_background('bgimg1.jpg')
        st.subheader('Login Page')
        uname = st.text_input("UserName")
        password = st.text_input("Password", type='password')

        if(st.button('Login')):
            result = user_exists(uname, password)
            if result == None:
                st.error('Incorrect Credentials / User Not Found')
            else:
                st.success('Login Successfull! Welcome {} {}'.format(result[0], result[1]))
                st.sidebar.text('Logged In User: {} {}'.format(result[0], result[1]))
                eel.start('header.php')
    
    
    elif choice == "SignUp":
        #set_background('bgimg1.jpg')

        st.subheader('Create New Account')
        uname = st.text_input("UserName")
        email = st.text_input("Email")
        fname = st.text_input("First Name")
        lname = st.text_input("Last Name")
        password = st.text_input("Password", type='password')
        
        if(st.button('Sign Up')):
            result = user_exists(uname, password)
            if result != None:
                st.warning('User Already Exists !')
            else:
                if (re.fullmatch(regex, email)):
                    if(len(password)>6):
                        if(insert_data(uname, email, fname, lname, password)):
                            st.success('User Created Successfully!')
                        else:
                            st.error('Something Went Wrong !')
                    else:
                        st.error("Please password must be more than 6 characters.")
                else:
                    st.error('Please enter a valid email')

if __name__ == '__main__':
    main()
