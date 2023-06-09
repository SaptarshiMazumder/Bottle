from unicodedata import name
from django.urls import path
from . import views
# from .views import HomeView

urlpatterns = [
    #     path('', views.home, name='home-page'),
    path('', views.home_timeline, name='home-page'),
    path('', views.home_timeline, name='expanded-post-page'),
    path('upload_reply/<int:pk>',
         views.upload_reply, name='upload_reply'),

    #     path('post/<int:post_id>', views.post_details, name='post-page'),
    path('add_post', views.add_post, name='add-post'),
    path('add_profile_post/<str:game>',
         views.add_profile_post, name='add-profile-post'),
    path('add_image_post', views.add_image_post, name="add-image-post"),
    path('add_video_post', views.add_video_post, name="add-video-post"),
    path('post/edit/<int:post_id>', views.edit_post, name='edit-post'),
    path('post/edit_images/<int:post_id>',
         views.edit_image_post, name='edit-image-post'),
    path('post/edit_video/<int:post_id>',
         views.edit_video_post, name='edit-video-post'),
    path('post/delete/<int:post_id>', views.delete_post, name='delete-post'),
    path('post/lft-posts', views.get_lft_posts, name='lft-posts'),
    path('category/<str:cat>/', views.category, name='posts-by-category'),
    # path('like/', views.like_post, name='like-post'),
    # path('like/<int:pk>', views.like_post_details, name='like-post-details'),
    path('like/', views.like, name='like'),
    path('setLikes/', views.set_likes, name='set_likes'),
    path('liked-by/<int:post_id>', views.liked_by, name='liked-by'),
    path('vouched-by/<int:profile_id>', views.vouched_by, name='vouched-by'),
    path('followers/<int:profile_id>', views.followers, name='followers'),
    path('following/<int:profile_id>', views.following, name='following'),
    path('vouch/', views.vouch, name='vouch'),
    path('vouch-user/', views.vouch_user, name='vouch-user'),
    path('follow-user/', views.follow_user, name='follow-user'),
    path('updateSession/', views.update_session, name='update_session'),
    path('getSessionData/', views.get_session_data, name='get_session_data'),

    path('fetch_replies_to_reply/', views.fetch_replies_to_reply,
         name='fetch_replies_to_reply'),
    # REST API views
    path('posts', views.post_list_view, name='post-list-view'),
    #     path('', views.home_view, name='home-page'),
    path('getPosts/', views.getPosts, name='get-posts-rest'),
    path('getPosts/<int:pk>', views.getPost, name='get-post-rest'),
    path('getPosts/<int:pk>/update', views.updatePost, name='update-post-rest'),
    path('getPosts/<int:pk>/delete', views.deletePost, name='delete-post-rest'),

    #     Communities section
    path('create_community', views.create_community, name='create-community'),
    path('edit_community/<int:id>',
         views.edit_community, name='edit-community'),
    path('edit_community_rules/<int:id>',
         views.editCommunityRules, name='edit_community_rules'),
    path('get_community_data/<int:id>',
         views.get_community_details, name='get_community_data'),
    path('community/<int:community_id>',
         views.community_page, name='community-page'),
    path('community-members/<int:community_id>',
         views.community_members, name='community-members'),
    path('join_community', views.join_community, name='join_community'),
    path('communities-list', views.show_communities, name='show-communities'),
    path('add_post_community/<int:community_id>',
         views.add_post_community, name='add-post-community'),
    path('add_image_post_community/<int:community_id>',
         views.add_image_post_community, name='add-image-post-community'),
    path('add_video_post_community/<int:community_id>',
         views.add_video_post_community, name='add-video-post-community'),


    path('user/<str:user>', views.user_posts_page, name="user-posts-page"),
    path('user/profile/<str:user>', views.user_profile_stats,
         name="user-profile-stats"),
    path('user/joined-communities/<int:user_id>', views.show_user_joined_communities,
         name="user-communities"),

    path('create_gamer_profile/<str:user>',
         views.create_game_profile, name="create-gamer-profile"),
    path('edit_gamer_profile/<str:user>',
         views.edit_gamer_profile, name="edit-gamer-profile"),

    path('matchmaking/<str:user>', views.MatchmakingHome, name="matchmaking-home"),
    path('matchmaking_data/<str:user>',
         views.Matchmaking_Data, name="matchmaking-data"),

    path('getgamerank_server/<str:game>',
         views.get_game_rank_server, name="get-game-rank-server"),
    path('get_saved_gamerank_server/<str:game>',
         views.get_saved_game_rank_server, name="get-saved-game-rank-server"),
    path('start_following/<str:who_to_follow>',
         views.start_following, name="start-following"),
    path('search', views.search_results, name='search'),
    path('search-communities', views.show_communities, name='search-communities'),
    path('get_gamer_profile_stats/<str:user>',
         views.Gamer_Profile_Data, name="get-gamer-profile-data"),
    path('get_user_profile_stats/<str:user>/<str:game>',
         views.User_Profile_Page_Data, name='get-user-profile-data'),
    # Get/ Update followers start
    path('get_following',
         views.Get_Following_Info, name='get-following'),
    path('unfollow/<str:who_to_unfollow>',
         views.Unfollow, name="unfollow"),
    # Get/ Update followers end

    # Get mobile sidebar data start
    path('get_mobile_sidebar_gamer_profile_stats/<str:user>',
         views.Mobile_Sidebar_Gamer_Profile_Data, name="get-mobile-sidebar-gamer-profile-data"),
    # Get mobile sidebar data end

    # Chat views start
    path('chat/<str:user_to_chat_with>',
         views.chat_with_user, name="chat"),
    path('chat-messages',
         views.chat_general_page, name="chat-general"),
    path('add-chat-contact', views.add_chat_contact, name="add-chat-contact"),
    path('add-chat-new-contact', views.chat_add_new, name="add-chat-new-contact"),
    path('add-unread-message-notification',
         views.add_unread_message_notification, name='add-unread-message-notification'),
    path('remove-unread-message-notification',
         views.remove_unread_message_notification, name='remove-unread-message-notification'),
    path('notifications/<str:user>',
         views.notifications, name='notifications'),
    path('remove-like-notifications',
         views.remove_like_notification, name='remove-like-notifications'),
    path('remove-vouch-notifications',
         views.remove_vouch_notifications, name='remove-vouch-notifications'),
    path('remove-unread-message-notifications-page',
         views.remove_uread_message_notification_from_notifications_page, name='remove-unread-message-notifications-page'),

    # Chat views en


#     v1.01 urls
     path('v1.01-home', views.home_timeline, name='home-page'),
     path('stories_page', views.stories_page, name='stories-page'),
     path('story_post_page', views.story_post_page, name='story-post-page'),

]
