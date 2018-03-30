IMAGE_TAG="$TRAVIS_BRANCH-$TRAVIS_COMMIT"

RELEASE_NAME=$(echo "$TRAVIS_BRANCH" | sed 's/\./-/g')

helm upgrade \
	--wait \
	--set akseliImage=jaska/akseli:$IMAGE_TAG \
	--install akseli-$RELEASE_NAME ./deployment
