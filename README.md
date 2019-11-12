# Groupe-12

## Requirements for local development

- [x] Install `docker`
- [x] Install `nvm`
- [x] Your favourite IDE
> Note: I advise [visual-studio-code](https://code.visualstudio.com/) for web development using NodeJS

## Connect to your production machine

You need to have both `ssh` key pair on your file system:
- arla_rsa
- arla_rsa.pub

From a terminal: 
```sh
$ ssh -i /path/to/arla_rsa sigl@<groupeXX>.arla-sigl.fr
# You might need sudo if this first line fails
$ sudo ssh -i /path/to/arla_rsa sigl@<groupeXX>.arla-sigl.fr
```
