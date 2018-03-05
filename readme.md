# Notes to make the SSH key configuration for the github for the repositories.

# SSH KEY CONFIGURATION STEPS:
1. Open git bash terminal (NOTE: few commands wont work in the normal CMD prompt or commander terminal on windows like ls -al ~/.ssh/ command)

2. $ ssh-keygen -t rsa -b 4096 -C 'my-email@example.com'

    -> This creates a new ssh key, using the provided email as a label. The file is located in ~/.ssh/ directoey. Use "ls -al ~/.ssh/" command to
        see the contents of the hidden folder .ssh. You will see 3 files there.
    
3. A prompt will come after the above execution of the command. Keep pressing enter and enter for the default values to get setup for the file to be generated.

4. $ eval $(ssh-agent -s)

    -> This command is to start the "ssh-agent" in the background to add the keys. We need to ensure this in order to add the keys 
       via the ssh-agent.

5. $ ssh-add ~/.ssh/id_rsa
    -> A message will pop up like Identity added.



# CONFIGURING THE KEY TO THE GITHUB ACCOUNT:
1. Copy the SSH key to the clipboard using ctrl + c or right click and copy after opening up the file "id_rsa.pub" file.

    e.g: 
    
    ssh-rsa AXBZB3NzaC1yc2EAAAADAQABAAACAQDCkqDIF11iY2ahugKr8OtgRL57UkQIYqd721GGYFgkVIugA1Rq3lCUmLYk7FIu5/txbaM3z4IAhD5+Q3wLLJr4UvFQgSiXPycIaL+ukGuL0hUl8CbSRdx8gwa5ITljd8fVx0UiWN1Ix2J2zEyUHgCnfUbE+bAsTHAn0C3qdOqihy3fFm54SkG5FIrD258DADO0VmbhViZY5W3DNeF+W3bnJ/mTac5wk5NG2yRr1f+NZPr3tMhohvIkg9Ts3Ej1EHv6lmZvDjLZc9ql5WjYRqBzuIpR8nhoxzfyGt04Q64oaMhmf1rnXSTfWwfL1H/TgNPsRpXC0jWv6evy2x2Op1fIOXr8tB+md6pZen969ImYvi9dwNUGdV5yNvfQl7mTvxLdn20eHMZbzF4lFishG17lkeZpg8NXsb7D4nYhPkuY/tN46m21mSjjhtKIdunp4C4kxOT31CvYybSKrbjmd5t2Idz/dEBgkHlEW0pBOsqrvm7hsC5Du8/AGtmilSUFDu4Z1ab4wn8CwRzFFN2dnCxpIkbJ0wQJQDPH3IJkXk3oARVo0QSjCmEjsse3gDDpta6FZwsdwededwedewdewdweqdZkhdCC5oHU9G6vUD7kQhD5skz6KggwXoTfDHDX/3mOXNf8NDTMpR1yV+/9dMxx/dfIzVmNuwy4YhPwdaykgRvaDB7+svlQ== pankaj@gmail.com


2. Now login into your Github account in the browser.

3. In the upper-right corner of any page of github, click your profile photo, then a drop down opens up and then click Settings.

4. click on "SSH and GPG keys" option under the Personal settings menu on the left.

5. You can see the button named as "New SSH key" in right most end of the SSH Keys label in green color probably. Click on that.

6. Then it will ask for the title and key. 

7. Give the title and paste the key in that input box.

8. Click on "Add SSH key" green button.

9. If asked, confirm the Github account password to continue the process. And after this step the key gets configured sucessfully.

10. $ ssh -T git@github.com   //This is to test our connection.
    
    -> The o/p of this command will be like 
    
    The authenticity of the host "github.com(192.168.00.23)" can't be established.
    RSA key fingerprint is SHA256:b885dwedHGGJBiwedh1SGHORX39edfeqweoq23epopdcsec7  
    Are you sure you want to continue connecting (YES/NO) <Enter yes to proceed>
    Warning: Permanently added 'github.com,192.30.299.114' (RSA) to the list of known hosts
    Hi Pankaj! You have sucessfully authenticated, but github does not provide shell access.
                            (OR simply below)
    Hi Pankaj! You have sucessfully authenticated, but github does not provide shell access.
    
    
11. The above message in point 10 confirms the sucessful addition of the SSH keys.

12. Then copy the SSH url of the repository from the github and use the command 
    $ git remote add origin <ssh-url.git>
    
13. commit and save on local machine and give it a push using 
    $ git push [origin master]