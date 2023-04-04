to build container :
docker build -t node-webdriverio .


for run:
docker run --name seleniumgitcourse -p 3000:3000 -v $(pwd):/app node-webdriverio


