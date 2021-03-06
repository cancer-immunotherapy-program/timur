require_relative './server/controllers/app_controller'
require_relative './server/controllers/archimedes_controller'
require_relative './server/controllers/browse_controller'
require_relative './server/controllers/manifests_controller'
require_relative './server/controllers/plots_controller'
require_relative './server/controllers/view_controller'

class App
  class Server < Etna::Server
    # Root path.
    get '/' do
      erb_view(:index)
    end

    get 'no_auth' do
      erb_view(:no_auth)
    end

    with(auth: {user: {can_view?: :project_name}}) do

# PAGES. Delivers the base HTML and UI.

      # Browse page.
      get ':project_name/browse/:model_name/*record_name', as: :browse_model do
        erb_view(:index)
      end

      # Search page.
      get ':project_name/search', as: :search do
        erb_view(:index)
      end

      # Map page.
      get ':project_name/map', as: :map do
        erb_view(:index)
      end

      # Manifest page.
      get ':project_name/manifests', as: :manifests do
        erb_view(:index)
      end

      # Plots page.
      get ':project_name/plots', as: :plots do
        erb_view(:index)
      end

# CONTROLLER ACTIONS. Supports the API and backend calls.

      # browse_controller.rb
      get ':project_name', action: 'browse#index', as: :project
      get ':project_name/browse', action: 'browse#index', as: :browse
      get ':project_name/activity', action: 'browse#activity', as: :activity

      # archimedes_controller.rb
      post ':project_name/consignment',
        action: 'archimedes#consignment',
        as: :consignment

      # plot_controller.rb
      post ':project_name/plots/fetch', action: 'plots#fetch'
      post ':project_name/plots/create', action: 'plots#create'
      post ':project_name/plots/update/:id', action: 'plots#update'
      delete ':project_name/plots/destroy/:id', action: 'plots#destroy'

      # manifest_controller.rb
      get ':project_name/manifests/fetch', action: 'manifests#fetch'
      post ':project_name/manifests/create', action: 'manifests#create'
      post ':project_name/manifests/update/:id', action: 'manifests#update'
      delete ':project_name/manifests/destroy/:id', action: 'manifests#destroy'

      # view_controller.rb
      get ':project_name/view/:model_name',
        action: 'view#retrieve_view',
        as: :retrieve_view
    end

    with(auth: {user: {is_admin?: :project_name}}) do
      # Settings page.
      get ':project_name/settings/:settings_page', as: :settings do
        erb_view(:index)
      end

      # view_controller.rb
      post ':project_name/view/update',
        action: 'view#update_view',
        as: :update_view
      post ':project_name/view/delete',
        action: 'view#delete_view',
        as: :delete_view
    end

    def initialize(config)
      super
      application.setup_db
      application.setup_magma
    end
  end
end
