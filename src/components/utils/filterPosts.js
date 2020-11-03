// @description Returns an array of posts that fit the current filters
// @param checked an array of strings that represent the currently selected filters
// @param allPosts an array of post objects that represent all the posts in the database
const filterPosts = (checked, allPosts) =>{
    // If no filters are selected return all the posts
    if (checked.length === 0){
        return allPosts
    }else{
        var filteredPosts = [];
        // Checks each post
        allPosts.forEach(post=> {
            // for each post parse out the subjects it is about and parse them so they can be compared to the filters
            var subjects = post.subjects.split(",")
            var parsed_subjects = []
            subjects.forEach(subject => {
                parsed_subjects.push(subject.trim())
            })
            // Check to see if the post contains any of the selected filters if it does push the the array of filteredPosts
            if(parsed_subjects.some(subject => checked.includes(subject))){
                filteredPosts.push(post)
            }

        })
        // Return the list of filtered posts
        return filteredPosts;   
    }
}

export default filterPosts;
