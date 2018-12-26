Venkat Naveen@Venkat_Naveen MINGW64 ~/Downloads/SHAREit/Week-7/NodeJs/WebRuby
$ docker build -t ruby1 .
Sending build context to Docker daemon  3.072kB
Step 1/3 : FROM ruby:2.5
2.5: Pulling from library/ruby
54f7e8ac135a: Pulling fs layer
d6341e30912f: Pulling fs layer
087a57faf949: Pulling fs layer
5d71636fb824: Pulling fs layer
0c1db9598990: Pulling fs layer
a054b67f1226: Pulling fs layer
a744ae148ed3: Pulling fs layer
2a8377516d3d: Pulling fs layer
5d71636fb824: Waiting
0c1db9598990: Waiting
a054b67f1226: Waiting
a744ae148ed3: Waiting
2a8377516d3d: Waiting
087a57faf949: Verifying Checksum
087a57faf949: Download complete
d6341e30912f: Verifying Checksum
d6341e30912f: Download complete
54f7e8ac135a: Verifying Checksum
54f7e8ac135a: Download complete
a054b67f1226: Verifying Checksum
a054b67f1226: Download complete
54f7e8ac135a: Pull complete
d6341e30912f: Pull complete
087a57faf949: Pull complete
5d71636fb824: Verifying Checksum
5d71636fb824: Download complete
2a8377516d3d: Verifying Checksum
2a8377516d3d: Download complete
5d71636fb824: Pull complete
a744ae148ed3: Verifying Checksum
a744ae148ed3: Download complete
0c1db9598990: Verifying Checksum
0c1db9598990: Download complete
0c1db9598990: Pull complete
a054b67f1226: Pull complete
a744ae148ed3: Pull complete
2a8377516d3d: Pull complete
Digest: sha256:51a1ebda36d505cf61b1657e551b263d7481c22fdb47cde9aad7264254fd49f7
Status: Downloaded newer image for ruby:2.5
 ---> 1a5fef068a30
Step 2/3 : COPY . .
 ---> 15e7063f1e03
Step 3/3 : CMD ["ruby","index.rb"]
 ---> Running in b943968f87b1
Removing intermediate container b943968f87b1
 ---> e67bf9642379
Successfully built e67bf9642379
Successfully tagged ruby1:latest
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.

Venkat Naveen@Venkat_Naveen MINGW64 ~/Downloads/SHAREit/Week-7/NodeJs/WebRuby
$ docker run ruby1
[1, 2, 3, "a", "b", "c"]
Stopping


