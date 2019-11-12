# We use multi-stage build since we do not need to have all node environment
# to serve static files. We just need minimal NGINX image with our static files
# (*.html *.js *.css ...)
# Further reading: https://docs.docker.com/develop/develop-images/multistage-build/


