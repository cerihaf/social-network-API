const router = require('express').Router();
const {
    addThought,
    removeThought,
    addReply,
    removeReply
  } = require('../../controllers/thought-controller');
  
// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<ThoughtId>
router
  .route('/:userId/:ThoughtId')
  .put(addReply)
  .delete(removeThought);

router.route('/:userId/:ThoughtId/:replyId').delete(removeReply);


module.exports = router;